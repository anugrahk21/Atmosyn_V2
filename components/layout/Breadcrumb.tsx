import Link from 'next/link'

export default function Breadcrumb({ breadcrumbTitle }: any) {
    return (
        <>
            <section className="breadcrumb__area fix">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-8">
                            <div className="breadcrumb__content">
                                <h3 className="title">{breadcrumbTitle} <img className="breadcrumb-shape" src="/assets/img/others/bredcrumb-shape1.png" alt="img" /></h3>
                                <nav className="breadcrumb">
                                    <span property="itemListElement" typeof="ListItem">
                                        <Link href="/">Home</Link>
                                    </span>
                                    <span className="breadcrumb-separator"><i className="flaticon-right-arrow-angle" /></span>
                                    <span property="itemListElement" typeof="ListItem">{breadcrumbTitle}</span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}
