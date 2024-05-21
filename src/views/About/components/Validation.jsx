import "../About.module.css";
import { Row, Col } from "antd";

function Validation() {
    return (
        <Row gutter={16}>
            <Col xs={24}>
                <h1>Validation</h1>
            </Col>
            <Col xs={24}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                    porttitor justo at mattis facilisis. Vestibulum pharetra nulla odio,
                    vel dignissim lacus interdum a. Aliquam dignissim mi at metus commodo,
                    vel fermentum turpis commodo. Nulla facilisi. Vestibulum rutrum,
                    lectus sit amet congue blandit, dui dui laoreet est, sed consequat
                    ligula libero sed tellus. Duis porttitor tincidunt rutrum. Nunc
                    rhoncus ipsum a arcu semper aliquam. Nunc vulputate nisi vel dui
                    lacinia mattis. Ut finibus lacinia pulvinar. Etiam et congue ligula,
                    id laoreet turpis. Aliquam vestibulum vel felis eget consequat. Morbi
                    et sollicitudin nisi, nec bibendum leo. Vestibulum erat urna, ultrices
                    non tellus ut, facilisis pharetra tellus. Ut ornare gravida erat vitae
                    commodo. Integer luctus nisi felis. Integer vehicula mattis turpis,
                    quis fermentum felis sollicitudin nec. Nulla nulla dolor, vehicula a
                    libero ut, volutpat dignissim est. Vivamus accumsan ut sapien sed
                    vulputate. Sed porta ullamcorper leo, vel molestie arcu suscipit quis.
                    In sit amet elementum nisi. Nulla quis auctor neque, suscipit blandit
                    urna. In hac habitasse platea dictumst. Duis feugiat odio nisi, sit
                    amet volutpat augue fringilla nec. Vestibulum bibendum condimentum
                    vestibulum. Praesent pharetra erat vitae sem tristique porttitor. Ut
                    vel felis id ligula elementum dignissim quis sed leo. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.
                </p>
                <a
                    href="https://www.sciencedirect.com/science/article/pii/S1574954123002200"
                    target="_blank"
                >
                    <button>

                        Read our article validating our program

                    </button>
                </a>
            </Col>
        </Row>
    );
}

export default Validation;
