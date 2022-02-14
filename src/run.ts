import ChildProcess from "child_process";

async function run() {
    // Main Process
    ChildProcess.exec(
        'cd TeamUltroid && python -m pyUltroid',
        (error, stdout, stderr) => {
            if (error) console.error(error);
            if (stdout) console.log(stdout);
            if (stderr.trim() != '') console.error(stderr);
        },
    );
}

export default run;