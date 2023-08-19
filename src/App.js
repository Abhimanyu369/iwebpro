import {Route, Routes} from 'react-router-dom';

import Add_benefit from "./adminpanel/pages/Add_benefit"
import Add_blog from "./adminpanel/pages/Add_blog"
import Add_client from "./adminpanel/pages/Add_client"
import Add_company from "./adminpanel/pages/Add_company"
import Add_dev from "./adminpanel/pages/Add_dev"
import Add_developer from "./adminpanel/pages/Add_developer"
import Add_event from "./adminpanel/pages/Add_event"
import Add_job from "./adminpanel/pages/Add_job"
import Add_review from "./adminpanel/pages/Add_review"
import Add_skill from "./adminpanel/pages/Add_skill"
import Add_testimonial from "./adminpanel/pages/Add_testimonial"
import Blog from './pages/Blog';
import Company from './pages/CompnyDetail';
import Dashboard from "./adminpanel/pages/Dashboard"
import DeveloperDetail from './pages/DeveloperDetail';
import Error from './pages/Error';
import Event from './pages/Event';
import Login from "./adminpanel/pages/Login"
import NewPage from "./pages/NewPage";
import Register from "./adminpanel/pages/Register"
import Requirements from "./pages/Requirements";
import Reviews from './pages/Reviews';
import StartHire from './pages/StartHire';
import TalentPage from "./pages/TalentPage";
import Update_benefit from "./adminpanel/pages/Update_benefit"
import Update_blog from "./adminpanel/pages/Update_blog"
import Update_client from "./adminpanel/pages/Update_client"
import Update_company from "./adminpanel/pages/Update_company"
import Update_dev from "./adminpanel/pages/Update_dev"
import Update_developer from "./adminpanel/pages/Update_developer"
import Update_event from "./adminpanel/pages/Update_event"
import Update_job from "./adminpanel/pages/Update_job"
import Update_review from "./adminpanel/pages/Update_review"
import Update_skill from "./adminpanel/pages/Update_skill"
import Update_testimonial from "./adminpanel/pages/Update_testimonial"

import View_benefit from "./adminpanel/pages/View_benefit"
import View_client from "./adminpanel/pages/View_client"
import View_blog from "./adminpanel/pages/View_blog"
import View_company from "./adminpanel/pages/View_company"
import View_dev from "./adminpanel/pages/View_dev"
import View_developer from "./adminpanel/pages/View_developer"
import View_event from "./adminpanel/pages/View_event"
import View_job from "./adminpanel/pages/View_job"
import View_skill from "./adminpanel/pages/View_skill"
import View_testimonial from "./adminpanel/pages/View_testimonial"
import View_review from "./adminpanel/pages/View_review"
import View_hire from "./adminpanel/pages/View_hire"

import AddDeveloper from "./talentpanel/pages/Add_developer"
import TalentDashboard from "./talentpanel/pages/Dashboard"
import LoginTalent from "./talentpanel/pages/Login_talent"
import EditDeveloper from "./talentpanel/pages/Update_developer"
import ViewDeveloper from "./talentpanel/pages/View_developer"
import Developer from './components/Talent/Developer';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' Component={NewPage} />
        <Route path='/active-requirements' Component={Requirements} />
        <Route path='/talent-partner' Component={TalentPage} />
        <Route path='/reviews' Component={Reviews} />
        <Route path='/company' Component={Company} />
        <Route path='/start-hire' Component={StartHire} />
        <Route path='/event' Component={Event} />
        <Route path='/blog' Component={Blog} />
        <Route path='/deve-detail' Component={DeveloperDetail} />
        <Route path='/developer' Component={Developer} />

        <Route path='/admin' Component={Dashboard} />
        <Route path='/login' Component={Login} />
        <Route path='/Register' Component={Register} />
        <Route path='/Add_benefit' Component={Add_benefit} />
        <Route path='/Add_client' Component={Add_client} />
        <Route path='/Add_blog' Component={Add_blog} />
        <Route path='/Add_company' Component={Add_company} />
        <Route path='/Add_dev' Component={Add_dev} />
        <Route path='/Add_developer' Component={Add_developer} />
        <Route path='/Add_event' Component={Add_event} />
        <Route path='/Add_job' Component={Add_job} />
        <Route path='/Add_skill' Component={Add_skill} />
        <Route path='/Add_testimonial' Component={Add_testimonial} />
        <Route path='/Add_review' Component={Add_review} />
        <Route path='/Update_benefit' Component={Update_benefit} />
        <Route path='/Update_client' Component={Update_client} />
        <Route path='/Update_blog' Component={Update_blog} />
        <Route path='/Update_company' Component={Update_company} />
        <Route path='/Update_dev' Component={Update_dev} />
        <Route path='/Update_developer' Component={Update_developer} />
        <Route path='/Update_event' Component={Update_event} />
        <Route path='/Update_job' Component={Update_job} />
        <Route path='/Update_skill' Component={Update_skill} />
        <Route path='/Update_testimonial' Component={Update_testimonial} />
        <Route path='/Update_review' Component={Update_review} />
        <Route path='/View_benefit' Component={View_benefit} />
        <Route path='/View_client' Component={View_client} />
        <Route path='/View_blog' Component={View_blog} />
        <Route path='/View_company' Component={View_company} />
        <Route path='/View_dev' Component={View_dev} />
        <Route path='/View_developer' Component={View_developer} />
        <Route path='/View_event' Component={View_event} />
        <Route path='/View_job' Component={View_job} />
        <Route path='/View_skill' Component={View_skill} />
        <Route path='/View_testimonial' Component={View_testimonial} />
        <Route path='/View_review' Component={View_review} />
        <Route path='/View_hire' Component={View_hire} />

        <Route path='/talent' Component={LoginTalent} />
        <Route path='/talent_dashboard' Component={TalentDashboard} />
        <Route path='/talent_add_developer' Component={AddDeveloper} />
        <Route path='/talent_edit_developer' Component={EditDeveloper} />
        <Route path='/talent_view_developer' Component={ViewDeveloper} />


        <Route path='*' Component={Error} />
      </Routes>
    </>
  );
}

export default App;