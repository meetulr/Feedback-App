import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm({handleAdd}) {
    const [text, setText] = useState("");
    const [rating, setRating] = useState(10);
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");

    const handleChange = (evt) => {
        if (text === "") {
            setBtnDisabled(true);
            setMessage("");
        }
        else if (text.trim().length <= 10) {
            setBtnDisabled(true);
            setMessage("Text must be at least 10 characters");
        }
        else {
            setBtnDisabled(false);
            setMessage(null);
        }
        
        setText(evt.target.value);
    }
    
    const handleSubmit = (evt) => {
        evt.preventDefault();

        if(text.trim().length > 10){
            const newFeedback = {text,rating}

            handleAdd(newFeedback);

            setText("");
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate our service?</h2>
                <RatingSelect select={(rating) => setRating(rating)}/>
                <div className="input-group">
                    <input
                        onChange={handleChange}
                        type="text"
                        placeholder="write a review"
                        value={text}
                    />
                    <Button type="submit" isDisabled={btnDisabled}>
                        Send
                    </Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm;
