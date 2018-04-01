// import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { select } from '../actions/index';
// import { changeProjects } from '../actions/index';
// import { Link } from 'react-router-dom';
// import { changeQueryForSearch } from '../actions/index';

// class Pagination extends Component {
//     constructor(props) {
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//         this.handleClick = this.handleClick.bind(this);
//     }

//     checkAuth(){
//         if(this.props.flag===true){
//             return <Link to={`/projects/${project.id}`}>{project.name}</Link>
//         }return <Link to={'/no_auth'}>{project.name}</Link>
//     }

//     showProjectsList() {
//         return this.props.projects.map((project) => {
//             return <li onClick={() => this.props.select(project)}
//                 key={project.id}>
//                 {this.checkAuth}
//             </li>;
//         })
//     };

//     getProjectsBySearch() {
//         this.props.Be.projects({ q: this.props.queryForSearch }, (err, res, data) => {
//             if (err) throw err;
//             this.props.changeProjects(JSON.parse(res.body).projects);
//             console.dir(JSON.parse(res.body).projects);
//         });
//     }




//     test() {
//         let username = this.props.username,
//             password = this.props.password;


//         fetch("http://www.behance.net/v2/projects?client_id=e1A607WbYauktG2el5XT2dbZriXROx4T&q=" + this.props.queryForSearch//+"&page="+,
//             {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Access-Control-Allow-Origin': '*'
//                 },
//                 method: "GET",
//             }).then((res) => { return res.json() })
//             .then((user) => {
//                 switch (JSON.stringify(user.name)) {
//                     case "null":
//                         this.props.changeFlag(false);
//                         break;
//                     case "trable with password":
//                         this.props.changeFlag(false);
//                         break;
//                     default:
//                         this.props.changeFlag(true);
//                         break;
//                 }
//             })
//     }




//     handleClick(e) {
//         e.preventDefault();
//         this.getProjectsBySearch();
//     }

//     handleChange(e) {
//         e.preventDefault();
//         this.props.changeQueryForSearch(e.target.value);
//     }

//     componentDidMount() {
//         this.getProjectsBySearch();
//     }


//     render() {
//         return (
//             <div>
//                 <ol>
//                     {this.showProjectsList()}
//                 </ol>
//             </div>
//         )
//     }
// }

// function mapStateToProps(state) {
//     return {
//         projects: state.projects,
//         Be: state.BehanceAPI,
//         queryForSearch: state.queryForSearch,
//         flag: state.flag
//     };
// }

// function matchDispatchToProps(dispatch) {
//     return bindActionCreators(
//         {
//             select: select,
//             changeProjects: changeProjects,
//             changeQueryForSearch: changeQueryForSearch
//         }, dispatch)
// }

// export default connect(mapStateToProps, matchDispatchToProps)(Pagination);
