import CheckBox from "./CheckBox";

export default function CheckList({mainListData, color}) {
    return (
        <nav className="h-full overflow-y-auto " aria-label="Directory">
            <div
                className={`text-lg font-bold py-5 ${color[mainListData.title].back_ground_color} text-center mt-14 ${color[mainListData.title].title_color}`}> {mainListData.title}</div>
            {mainListData.data.map((taskData) => (
                <CheckBox key={Math.random()} taskData={taskData.data} subTitle={taskData.title}
                          color={color[mainListData.title]}/>
            ))}
        </nav>
    )
}
