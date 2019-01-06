// import React from 'react';
// import './Tabs.scss';
// import {
//   TabContent,
//   TabPane,
//   Nav,
//   NavItem,
//   NavLink,
//   Row,
//   Col,
// } from 'reactstrap';
// import classnames from 'classnames';
// import Resource from '../Resource/Resource';
// import Blog from '../Blog/Blog';
// import Podcast from '../Podcast/Podcast';
// import Tutorial from '../Tutorial/Tutorial';


// class Tabs extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       activeTab: '1',
//     };
//   }

//   toggle(tab) {
//     if (this.state.activeTab !== tab) {
//       this.setState({
//         activeTab: tab,
//       });
//     }
//   }

//   render() {
//     const { resources } = this.props;

//     const resourceComponents = resources.map(resource => (
//       <Resource
//         resource={resource}
//         key={resource.id}
//       />
//     ));
//     const { blogs } = this.props;

//     const blogComponents = blogs.map(blog => (
//       <Blog
//         blog={blog}
//         key={blog.id}
//       />
//     ));
//     const { podcasts } = this.props;

//     const podcastComponents = podcasts.map(podcast => (
//       <Podcast
//         podcast={podcast}
//         key={podcast.id}
//       />
//     ));
//     const { tutorials } = this.props;

//     const tutorialComponents = tutorials.map(tutorial => (
//       <Tutorial
//         tutorial={tutorial}
//         key={tutorial.id}
//       />
//     ));
//     return (
//       <div id="dashTabs">
//         <Nav tabs>
//           <NavItem>
//             <NavLink
//               className={classnames({ active: this.state.activeTab === '1' })}
//               onClick={() => { this.toggle('1'); }}
//             >
//               TUTORIALS
//             </NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink
//               className={classnames({ active: this.state.activeTab === '2' })}
//               onClick={() => { this.toggle('2'); }}
//             >
//               BLOGS
//             </NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink
//               className={classnames({ active: this.state.activeTab === '3' })}
//               onClick={() => { this.toggle('3'); }}
//             >
//               RESOURCES
//             </NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink
//               className={classnames({ active: this.state.activeTab === '4' })}
//               onClick={() => { this.toggle('4'); }}
//             >
//               PODCASTS
//             </NavLink>
//           </NavItem>
//         </Nav>
//         <TabContent activeTab={this.state.activeTab}>
//           <TabPane tabId="1">
//             <Row>
//               <Col sm="12">
//                 <h4>TUTORIALS</h4>
//                 {tutorialComponents}
//               </Col>
//             </Row>
//           </TabPane>
//           <TabPane tabId="2">
//             <Row>
//               <Col sm="12">
//                 <h4>BLOGS</h4>
//                 {blogComponents}
//               </Col>
//             </Row>
//           </TabPane>
//           <TabPane tabId="3">
//             <Row>
//               <Col sm="12">
//                 <h4>RESOURCES</h4>
//                 {resourceComponents}
//               </Col>
//             </Row>
//           </TabPane>
//           <TabPane tabId="4">
//             <Row>
//               <Col sm="12">
//                 <h4>PODCASTS</h4>
//                 {podcastComponents}
//               </Col>
//             </Row>
//           </TabPane>
//         </TabContent>
//       </div>
//     );
//   }
// }

// export default Tabs;
