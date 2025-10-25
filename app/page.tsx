
'use client'
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();
  return (
    <div style={{
      height: '100vh',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      flexDirection:'column',
      background:'#0A0F29',
      color:'white'
    }}>
      <h1 style={{fontSize:28, marginBottom:12}}>DASHBOARD PM KERJASAMA</h1>
      <button
        style={{
          marginTop:20,
          padding:'12px 24px',
          background:'#0070f3',
          borderRadius:8,
          border:'none',
          fontSize:16,
          cursor:'pointer',
          color:'white'
        }}
        onClick={() => router.push('/dashboard')}
      >
        Masuk Dashboard
      </button>
    </div>
  );
}
