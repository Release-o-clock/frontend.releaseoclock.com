import { Container, Image, Button } from "react-bootstrap"

const HeroTeaser = () => {
    return (
        <section className="bg-dark text-center text-sm-start text-light p-4">
            <Container>
                <div className="d-lg-flex align-items-center justify-content-between">
                    <div>
                        <h1>Become a <span className="text-warning">web developer</span></h1>
                        <p className="lead my-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec hendrerit id ante at venenatis. Nunc non elementum eros,
                            id pulvinar velit. Vestibulum mauris velit, venenatis sit amet mi a, rhoncus ullamcorper leo. Maecenas ac tristique orci, sodales malesuada magna.
                        </p>

                        <Button variant="primary" size="lg">Start the enrollment</Button>
                    </div>

                    {/* <Image className="img-fluid d-none d-lg-block" src="/profile.png" alt="test" /> */}
                </div>
            </Container>
        </section>
    )
}

export default HeroTeaser
