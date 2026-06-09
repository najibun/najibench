export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 28, fontWeight: "bold" }}>
        Server Benchmark Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
          marginTop: 24,
        }}
      >
        <Card title="Total Benchmarks" value="12" />
        <Card title="Avg CPU Score" value="28,450" />
        <Card title="Avg Disk Read" value="3200 MB/s" />
        <Card title="Avg Network" value="920 Mbps" />
      </div>
    </main>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div
      style={{
        padding: 16,
        border: "1px solid #ddd",
        borderRadius: 12,
      }}
    >
      <p style={{ fontSize: 14, opacity: 0.7 }}>{title}</p>
      <h2 style={{ fontSize: 24, fontWeight: "bold" }}>{value}</h2>
    </div>
  );
}
