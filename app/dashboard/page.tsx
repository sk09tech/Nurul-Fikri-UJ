
export default function Dashboard() {
  return (
    <div style={{minHeight:'100vh', background:'#0A0F29', color:'white', padding:24}}>
      <header style={{display:'flex', alignItems:'center', gap:12}}>
        <div style={{width:56,height:56,borderRadius:8, background:'linear-gradient(135deg,#4f46e5,#8b5cf6)', display:'flex',alignItems:'center',justifyContent:'center', fontWeight:700}}>NF</div>
        <div>
          <h2 style={{margin:0}}>DASHBOARD PM KERJASAMA</h2>
          <div style={{fontSize:12, color:'#cbd5e1'}}>Selamat datang — pilih sekolah untuk melihat file</div>
        </div>
      </header>

      <section style={{marginTop:20}}>
        <div style={{padding:16, background:'#0f1724', borderRadius:12}}>
          <p>Demo: halaman dashboard belum terhubung ke Clerk / Google Drive.</p>
          <ol>
            <li>Integrate Clerk keys in Vercel (.env)</li>
            <li>Push school folder IDs into client config (or admin page)</li>
            <li>Enable preview/download handling</li>
          </ol>
        </div>
      </section>
    </div>
  )
}
