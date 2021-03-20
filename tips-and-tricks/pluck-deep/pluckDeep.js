const ourStorage = {
    desk: {
        drawer: "stapler",
    },
    cabinet: {
        top: {
            folder1: {
                secret: "black files",
            },
            folder2: "secrets",
        },
        bottom: "soda",
    },
};

const key = "cabinet.top.folder1.secret";

const pluckDeep = (key) => (obj) => key.split(".").reduce((acc, curr) => acc[curr], obj);

console.log(pluckDeep(key)(ourStorage));
console.log(pluckDeep("desk.drawer")(ourStorage));
