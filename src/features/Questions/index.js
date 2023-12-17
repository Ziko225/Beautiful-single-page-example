import Button from "../../components/Button";
import InformationBlock from "../../components/InformationBlock";
import QuestionButton from "./QuestionButton";
import "./styles.scss";

const Questions = () => {
    return (
        <section className="questions">
            <InformationBlock title="Frequently Asked Questions" className="questions__info" center>
                Here are some of our FAQs. If you have any other questions
                you'd like answered please feel free to email us.
            </InformationBlock>
            <QuestionButton quesstion="What is Bookmark?">
                At vero eos et accusamus et iusto odio dignissimos ducimus,
                qui blanditiis praesentium voluptatum deleniti atque corrupti,
                quos dolores et quas molestias excepturi sint,
                obcaecati cupiditate non provident, similique sunt in culpa,
                qui officia deserunt mollitia animi,
                id est laborum et dolorum fuga.
            </QuestionButton>
            <QuestionButton quesstion="How can I request a new browser?">
                At vero eos et accusamus et iusto odio dignissimos ducimus,
                qui blanditiis praesentium voluptatum deleniti atque corrupti,
                quos dolores et quas molestias excepturi sint,
                obcaecati cupiditate non provident, similique sunt in culpa,
                qui officia deserunt mollitia animi,
                id est laborum et dolorum fuga.
            </QuestionButton>
            <QuestionButton quesstion="Is there a mobile app?">
                At vero eos et accusamus et iusto odio dignissimos ducimus,
                qui blanditiis praesentium voluptatum deleniti atque corrupti,
                quos dolores et quas molestias excepturi sint,
                obcaecati cupiditate non provident, similique sunt in culpa,
                qui officia deserunt mollitia animi,
                id est laborum et dolorum fuga.
            </QuestionButton>
            <QuestionButton quesstion="What about other Chromium browsers?">
                At vero eos et accusamus et iusto odio dignissimos ducimus,
                qui blanditiis praesentium voluptatum deleniti atque corrupti,
                quos dolores et quas molestias excepturi sint,
                obcaecati cupiditate non provident, similique sunt in culpa,
                qui officia deserunt mollitia animi,
                id est laborum et dolorum fuga.
            </QuestionButton>
            <Button className="questions__button">More info</Button>
        </section>
    );
};

export default Questions;