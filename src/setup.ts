import ChildProcess from "child_process";
import { join } from "path";

function clone() {
    console.log('[INFO] Cloning Ultroid to [root://TeamUltroid]');
    ChildProcess.execSync(
        `git clone https://github.com/TeamUltroid/Ultroid TeamUltroid ${process.env.dev ? '-b dev': ''}`,
    );
    console.log('[INFO] Successfully cloned Ultroid to [root://TeamUltroid]');
}

function installRequirements() {
    console.log('[INFO] Installing dependencies...');
    ChildProcess.execSync(
        `cd TeamUltroid && pip install -U -r requirements.txt --no-cache-dir`,
    );
    ChildProcess.execSync(
        `cd TeamUltroid && pip install -U -r ${join('resources', 'startup', 'optional-requirements.txt')} --no-cache-dir`,
    );
    console.log('[INFO] Successfully installed dependencies');
}

async function setup() {
    clone();
    installRequirements();
}

export default setup;