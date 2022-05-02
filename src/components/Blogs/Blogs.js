import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div>
            <h2>Question-01:  Difference between javascript and node.js?</h2>
            <p><b>Answer-01: <br /> JavaScript</b> is a language and it is implementation of ECMAScript. It is governed by a group known as TC39. It can not run without <b>javaScript engine link V8.</b> <br />

                <b>Node.js</b> is a runtime of <b>javaScript</b>. It’s written in C++. It can run <b>JavaScript</b> out of browser. It is also used as medium of server side and client side .</p>
            </div>
            <div> <br />
            <h2>Question-02:  When should you use nodejs and when should you use mongodb?</h2>
                <p><b>Answer-02: <br /> Node.js is to use for different purpose. They are <li>Real-time applications,</li><li>IoT(Internet of Things) applications</li>
                <li>Collaborative tools.</li>
                <li>Data streaming applications.</li>
                <li>Applications relying on scalability.</li></b></p><br />

                <p><b>Mongodb</b> is a no SQL database & open source . It supports structural & no structural data storing. However it is used for--
                <b>
                <li>It is a natural form to store data.</li>
                <li>It is human-readable.</li>
                <li>Structured and unstructured information can be stored in the same document.</li>
                <li>You can nest JSON to store complex data objects.</li>

                </b>
                </p>
                <br />
                <div>
                <h2>Question-03:   Differences between sql and nosql databases.?</h2>
                <p><b>SQL means</b> structural query language . it is vertically scalable. It is dependent on specific format and table based. <br /> <b> On the otherhand noSQL means</b> no structural query language. it is independent from specific format . it dependent on documents, key, value like JSON etc. </p>
                </div>
                </div>
        </div>
        
    );
};

export default Blogs;