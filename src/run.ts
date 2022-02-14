import ChildProcess from "child_process";

async function run() {
    let mainProcess = ChildProcess.spawn('cd', ['TeamUltroid', '&&', 'python', '-m', 'pyUltroid']);
    mainProcess.stdout.on('data', (data) => {
        console.log(data);
    })
    mainProcess.stderr.on('data', (data) => {
        console.log(data);
    });
}

export default run;