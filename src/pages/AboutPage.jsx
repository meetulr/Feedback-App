import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage(Page) {
    return (
        <Card>
            <div className="about">
                <h1>About This Project</h1>
                <p>This is a react app to leave feedback for a product</p>
                <p>Version 1.0.0</p>

                <p>
                    <Link to="/">
                        Back to Home
                    </Link>
                </p>
            </div>
        </Card>
    )
}

export default AboutPage;