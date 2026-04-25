import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, CheckCircle2, XCircle, AlertCircle } from "lucide-react";

const LIVE_ORIGIN = "https://rank-robot-buddy.lovable.app";

// Known route → expected H1 (extend as needed)
const EXPECTED_H1S: Record<string, string> = {
  "/": "More Leads. Stronger Visibility. A System That Works While You Work.",
  "/services/paid-advertising/google-local-services-ads/":
    "Google Local Service Ads: Get More Calls. Pay Only for Real Leads.",
};

type Result = {
  status: "match" | "mismatch" | "missing" | "error";
  fetchedH1?: string;
  expectedH1?: string;
  httpStatus?: number;
  message?: string;
};

const normalize = (s: string) =>
  s.replace(/\s+/g, " ").replace(/\u00a0/g, " ").trim();

const stripTags = (html: string) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, "");

const extractFirstH1 = (html: string): string | null => {
  const match = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
  if (!match) return null;
  return normalize(stripTags(match[1]));
};

const H1Check = () => {
  const [path, setPath] = useState("/services/paid-advertising/google-local-services-ads/");
  const [expected, setExpected] = useState(
    EXPECTED_H1S["/services/paid-advertising/google-local-services-ads/"]
  );
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  const handlePathChange = (value: string) => {
    setPath(value);
    if (EXPECTED_H1S[value]) setExpected(EXPECTED_H1S[value]);
  };

  const runCheck = async () => {
    setLoading(true);
    setResult(null);
    try {
      const cleanPath = path.startsWith("/") ? path : `/${path}`;
      const target = `${LIVE_ORIGIN}${cleanPath}`;
      // allorigins returns the raw HTML and includes permissive CORS headers
      const proxy = `https://api.allorigins.win/raw?url=${encodeURIComponent(
        `${target}?_cb=${Date.now()}`
      )}`;
      const res = await fetch(proxy, { cache: "no-store" });
      const html = await res.text();
      const h1 = extractFirstH1(html);

      if (!h1) {
        setResult({
          status: "missing",
          httpStatus: res.status,
          expectedH1: expected,
          message: "No <h1> found in returned HTML.",
        });
        return;
      }

      const matches = normalize(h1) === normalize(expected);
      setResult({
        status: matches ? "match" : "mismatch",
        httpStatus: res.status,
        fetchedH1: h1,
        expectedH1: expected,
      });
    } catch (err) {
      setResult({
        status: "error",
        message: err instanceof Error ? err.message : "Unknown error",
      });
    } finally {
      setLoading(false);
    }
  };

  const StatusBadge = () => {
    if (!result) return null;
    if (result.status === "match")
      return (
        <Badge className="bg-green-600 hover:bg-green-600 text-white gap-1">
          <CheckCircle2 className="w-3.5 h-3.5" /> Match
        </Badge>
      );
    if (result.status === "mismatch")
      return (
        <Badge variant="destructive" className="gap-1">
          <XCircle className="w-3.5 h-3.5" /> Mismatch
        </Badge>
      );
    return (
      <Badge variant="secondary" className="gap-1">
        <AlertCircle className="w-3.5 h-3.5" /> {result.status}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <Helmet>
        <title>Live H1 Verifier</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      <div className="max-w-2xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-heading bg-clip-text text-transparent">Live H1 Verifier</h1>
          <p className="text-muted-foreground mt-1">
            Fetches the raw HTML of a live page and checks the first &lt;h1&gt;.
          </p>
        </div>

        <Card className="p-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="path">Path on {LIVE_ORIGIN}</Label>
            <Input
              id="path"
              value={path}
              onChange={(e) => handlePathChange(e.target.value)}
              placeholder="/services/..."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="expected">Expected H1</Label>
            <Input
              id="expected"
              value={expected}
              onChange={(e) => setExpected(e.target.value)}
            />
          </div>
          <Button onClick={runCheck} disabled={loading || !path || !expected}>
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Checking…
              </>
            ) : (
              "Check live H1"
            )}
          </Button>
        </Card>

        {result && (
          <Card className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                HTTP {result.httpStatus ?? "—"}
              </span>
              <StatusBadge />
            </div>
            {result.message && (
              <p className="text-sm text-destructive">{result.message}</p>
            )}
            {result.expectedH1 && (
              <div>
                <Label className="text-xs uppercase text-muted-foreground">
                  Expected
                </Label>
                <p className="text-foreground mt-1">{result.expectedH1}</p>
              </div>
            )}
            {result.fetchedH1 && (
              <div>
                <Label className="text-xs uppercase text-muted-foreground">
                  Fetched
                </Label>
                <p className="text-foreground mt-1">{result.fetchedH1}</p>
              </div>
            )}
          </Card>
        )}
      </div>
    </div>
  );
};

export default H1Check;
