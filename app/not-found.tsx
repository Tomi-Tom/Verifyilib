import Image from 'next/image';
function NotFoundPage() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content block text-center">
        <Image src="/not-found.png" className="mx-auto" alt="Page not found" width={700} height={700}/>
        <h1 className="text-4xl font-bold">Page not found</h1>
      </div>
    </div>
  );
}

export default NotFoundPage;