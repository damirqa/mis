import React, {useEffect} from 'react';
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/UseTypedSelector";
import State from "./State";
import {store} from "../../store";
import StatePlacement from "./StatePlacement";

const Board = () => {

    return (
        <StatePlacement/>
    );
};

export default Board;