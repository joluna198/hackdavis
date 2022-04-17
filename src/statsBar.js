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
                <div className="px- py-5 pl-6 bg-white shadow-xl  hover:scale-105 rounded-lg overflow-hidden sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">{"Today Score:"}</dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">{scoreCtx.score}</dd>
                </div>
                <div className="px- py-5 pl-6 bg-white shadow-xl hover:scale-105  rounded-lg overflow-hidden sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">{"Progress"}</dt>
                    <progress className='bg-blue-500 mt-4' id="file" max="100" value="0"> 70% </progress>
                </div>
                <div className="px- py-5 pl-6 bg-white shadow-xl hover:scale-105 rounded-lg overflow-hidden sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">{"Total Score"}</dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">1345</dd>

                </div>
                {/* ))} */}
            </dl>
        </div>
    )
}
