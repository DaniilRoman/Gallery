import Behance from 'behance-api';

export default function () {
    // var result = {};
    var resres = [];
    // new Behance('e1A607WbYauktG2el5XT2dbZriXROx4T')
    //     .projects({}, function (err, res, data) {
    //         if (err) throw err;
    //         console.dir(JSON.parse(res.body).projects[1]);
    //         result = JSON.parse(res.body).projects;
    //         // th.result.name = res.name;
    //         // th.result.img = res.covers.original;
    //         // th.result.url = res.url;
    //         resres = [
    //             {
    //                 id: 1,
    //                 name: result[1].name,
    //                 speed: 245.54,
    //                 weight: 1.5,
    //                 desc: result[1].url,
    //                 img: result[1].covers.original,
    //             },
    //             {
    //                 id: 2,
    //                 name: result[2].name,
    //                 speed: 310.12,
    //                 weight: 1.22,
    //                 desc: result[2].url,
    //                 img: result[2].covers.original,
    //             },
    //             {
    //                 id: 3,
    //                 name: result[3].name,
    //                 speed: 290,
    //                 weight: 0.9,
    //                 desc: result[3].url,
    //                 img: result[3].covers.original,
    //             },
    //         ];
    //     })
        return resres;
}











// import React, { Component } from 'react';
// import Behance from 'behance-api';
// export default class BehanceAPI extends Component {
//     constructor(props) {
//         super(props);
//         this.Be = new Behance('e1A607WbYauktG2el5XT2dbZriXROx4T');
//         this.result = {};
//         this.getProjects = this.getProjects.bind(this);
//     };

//     getProjects(){
//         this.Be.projects({}, function (err, res, data) {
//             if (err) throw err;
//             this.result = JSON.parse(res.body);
//             // th.result.name = res.name;
//             // th.result.img = res.covers.original;
//             // th.result.url = res.url;
//         });
//     return [
//         {
//             id:1,
//             name:result.projects[1].name,
//             speed:245.54,
//             weight:1.5,
//             desc:result.projects[1].url,
//             img: result.projects[1].covers.original,
//         },
//         {
//             id:2,
//             name:result.projects[2].name,
//             speed:310.12,
//             weight:1.22,
//             desc:result.projects[2].url,
//             img: result.projects[2].covers.original,
//         },
//         {
//             id:3,
//             name:result.projects[3].name,
//             speed:290,
//             weight:0.9,
//             desc:result.projects[3].url,
//             img: result.projects[3].covers.original,
//         },
//     ];
// }
// } 