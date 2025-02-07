import { describe, expect, it } from "vitest";
import { loader } from "~/routes/healthz";

describe("Health Check", () => {
  it("returns healthy status when services are up", async () => {
    const response = await loader({
      request: new Request("http://test.com/healthz"),
      params: {},
      context: {}
    });

    const data = await response.json();
    console.log(data)

    expect(response.status).toBe(200);
    expect(data.status).toBe("healthy");
    expect(data.checks.database).toBe(true);
    expect(data.checks.redis).toBe(true);
    expect(data.timestamp).toBeDefined();
  });
});
