import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Error() {

    return (
        <>
            <Layout headerStyle={8} footerStyle={2} breadcrumbTitle="404 Not Found">
                <div className="error-wrapper text-center pt-60 pb-60">
                    <div className="container">
                        <img className="mb-50" src="/assets/img/others/error-img.svg" alt="error" />
                        <div className="section__title mb-40 mt-0">
                            <h2 className="title">PAGE NOT FOUND</h2>
                            <p className="sec-text3" style={{ maxWidth: 470, margin: '30px auto 0' }}>Sorry, The Page You are looking for doesn't exists
                                or has been removed.</p>
                        </div>
                        <Link href="/" className="btn btn-two square-btn">
                            <i className="fas fa-arrow-left" /> Go Back
                        </Link>
                    </div>
                </div>
            </Layout>
        </>
    )
}