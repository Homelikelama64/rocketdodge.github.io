let v1Timer = 0;
let v2Timer = 0;

let v1DelayTimer = 6;
let v2DelayTimer = 23;

function resetWaves() {
    v1Timer = 0;
    v1DelayTimer = 6;
    v2Timer = 0;
    v2DelayTimer = 23;
}

function waves(ts) {
    v1Timer += ts;
    while (v1Timer >= v1DelayTimer) {
        v1Timer -= v1DelayTimer;
        spawnMissileV1();
        v1DelayTimer = max(v1DelayTimer - 0.07, 2);
    }
    v2Timer += ts;
    while (v2Timer >= 23) {
        v2Timer -= v2DelayTimer;
        spawnMissileV2();
        v2DelayTimer = max(v2DelayTimer - 0.05, 6);
    }
}
