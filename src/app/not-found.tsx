import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <TopNavigationBar />
      <main className="d-flex align-items-center justify-content-center" style={{ minHeight: '70vh' }}>
        <div className="text-center py-5">
          <h1 className="display-1 fw-bold text-primary">404</h1>
          <h2 className="mb-3">Page Not Found</h2>
          <p className="text-muted mb-4">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
          <Link href="/" className="btn btn-primary px-4">
            Go to Homepage
          </Link>
        </div>
      </main>
      <Footer1 />
    </>
  )
}
