import * as React from "react";
import {Component} from "react";

export interface IImageComponentProps {
    a?: any;
    b?: any;
}

export interface IImageComponentState {
    stateName?: any;
}

// 'IImageComponentProps' describes the shape of props.
// 'IImageComponentState' describes the shape of state.
export class ImageComponent extends Component<IImageComponentProps, IImageComponentState> {
    public render() {
        return (
            <>
                <h1>{this.props.a}</h1>
                <h2>{this.props.b}</h2>
            </>
        );
    }
}