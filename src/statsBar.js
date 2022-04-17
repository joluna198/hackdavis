import {useState, useContext} from "react";
import ScoreContext from './store/score-context';

// DEPRECIATED
// const stats = [
//     { name: 'Total Subscribers', stat: '71,897' },
//     { name: 'Avg. Open Rate', stat: '58.16%' }
// ]

export default function StatsBar() {
    const scoreCtx = useContext(ScoreContext);
    console.log("Score updated in STATSBAR.JS: ", scoreCtx.score)
    return (
        <div>
            <dl className=" grid grid-cols-1 gap-5 sm:grid-cols-3">
                {/* {stats.map((item) => ( */}
                <div className="px- py-5 pl-6 bg-white shadow rounded-lg overflow-hidden sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">{"SCORE:"}</dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">{scoreCtx.score}</dd>
                </div>
                {/* ))} */}
            </dl>
        </div>
    )
}
