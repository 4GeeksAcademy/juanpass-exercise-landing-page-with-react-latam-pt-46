import React from "react";

const Cards = () => {
    return (

        <div className="flex-direction row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
                <div className="card">
                    <img src="https://picsum.photos/300/200" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">
                            <button type="button" class="btn btn-primary">Find out more</button>
                        </small>
                    </div>
                </div>
            </div>

        </div>

    );
};


export default Cards;

