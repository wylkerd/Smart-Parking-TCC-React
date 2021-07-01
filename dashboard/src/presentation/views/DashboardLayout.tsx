export function DashboardLayout()
{
    const socket = io();
    var spots = new Array(7);

    socket.on('status', function (data) {
        console.log(data);
        spots = data;
    })

    return(
        <>
            
        </>
    )
}