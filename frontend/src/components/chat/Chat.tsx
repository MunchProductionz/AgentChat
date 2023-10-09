import React, { useState } from "react";

const Chat = () => {
    const [userQuery, setUserQuery] = useState("");
    const [apiResponse, setApiResponse] = useState("");

    const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserQuery(event.target.value);
    };

    const handleAskClick = async () => {
        try {
            const response = await fetch(`API_URL?query=${userQuery}`);     // TODO: Use API-service function
            const data = await response.json();
            setApiResponse(data.response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input type="text" value={userQuery} onChange={handleQueryChange} />
            <button onClick={handleAskClick}>Ask</button>
            <div>{apiResponse}</div>
        </div>
    );
};

export default Chat;
