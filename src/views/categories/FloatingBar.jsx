import React, { Component } from 'react';
import { Toast } from 'react-bootstrap';
import './Categories.css';

export default class FloatingBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div
                className={`floating ${
                    this.props.totalValue == 0 ? 'floating open ' : ''
                }`}
                aria-live="polite"
                aria-atomic="true"
                style={{
                    position: 'fixed',
                    minHeight: '300px',
                    zIndex: 2,
                    bottom: '-25%',
                    right: '39%',
                    pointerEvents: 'none',
                }}
            >
                <Toast
                    style={{
                        // position: 'absolute',
                        bottom: 10,
                        right: 0,
                        minWidth: 300,
                        textAlign: 'center',
                        fontSize: 18,
                    }}
                >
                    <Toast>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded mr-2"
                            alt=""
                        />
                        <strong className="mr-auto" style={{ fontSize: 20 }}>
                            Total da Compra:
                        </strong>
                    </Toast>
                    <Toast.Body>R$ {this.props.totalValue},00</Toast.Body>
                </Toast>
            </div>
        );
    }
}
