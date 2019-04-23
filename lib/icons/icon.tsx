import React from 'react';
import './icon.scss';
import './importIcons';
import classes from './../helpers/classes'

interface IconProps extends React.SVGAttributes<SVGElement>{
    name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
    let {className,name,...restProps} =props;
    return (
        <span>
            <svg className={classes('fui-icon',className)}
                 {...restProps}
            >
                <use xlinkHref={`#${props.name}`}></use>
            </svg>
        </span>
    );
};
export default Icon;