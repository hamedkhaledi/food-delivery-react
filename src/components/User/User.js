import { useLocation } from 'react-router-dom';
import '../../styles/User.css';
import { useHistory } from 'react-router-dom';
import CartHeader from '../Shop/Header/CartHeader';

const User = (props) => {
  const history = useHistory();
  const location = useLocation();
  let currentUser = location.state.currentUser;
  console.log('profile: ' + currentUser);
  function handleShop() {
    let path = '/shop';
    history.push({
      pathname: path,
      state: { currentUser: currentUser }
    });
  }

  console.log(location);

  return (
    <div class='container-user '>
      <CartHeader handleShop={() => handleShop()} />
      <div class='container emp-profile'>
        <form method='post'>
          <div class='row'>
            <div class='col-md-4'>
              <div class='profile-img'>
                <img
                  src='https://pfpmaker.com/_nuxt/img/profile-3-1.3e702c5.png'
                  alt=''
                />
                <div class='file btn btn-lg btn-primary'>
                  Change Photo
                  <input type='file' name='file' />
                </div>
              </div>
            </div>
            <div class='col-md-6'>
              <div class='profile-head'>
                <h5>{currentUser.name}</h5>
                <ul class='nav nav-tabs' id='myTab' role='tablist'>
                  <li class='nav-item'>
                    <a
                      class='nav-link active'
                      id='home-tab'
                      data-toggle='tab'
                      href='#home'
                      role='tab'
                      aria-controls='home'
                      aria-selected='true'
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
              <div class='col-md-8'>
                <div class='tab-content profile-tab' id='myTabContent'>
                  <div
                    class='tab-pane fade show active'
                    id='home'
                    role='tabpanel'
                    aria-labelledby='home-tab'
                  >
                    <div class='row'>
                      <div class='col-md-6'>
                        <label>Phone Number</label>
                      </div>
                      <div class='col-md-6'>
                        <label class='text-primary'>{currentUser.number}</label>
                      </div>
                    </div>
                    <div class='row'>
                      <div class='col-md-6'>
                        <label>Region</label>
                      </div>
                      <div class='col-md-6'>
                        <label class='text-primary'>{currentUser.region}</label>
                      </div>
                    </div>
                    <div class='row'>
                      <div class='col-md-6'>
                        <label>Address</label>
                      </div>
                      <div class='col-md-6'>
                        <label class='text-primary'>{currentUser.address}</label>
                      </div>
                    </div>
                    <div class='row'>
                      <div class='col-md-6'>
                        <label>Credit</label>
                      </div>
                      <div class='col-md-6'>
                        <label class='text-primary'>{currentUser.credit}</label>
                      </div>
                    </div>
                    <div class='row'>
                      <div class='col-md-6'>
                        <label>new Password</label>
                      </div>
                      <div class='col-md-6'>
                        <input type='password'></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class='col-md-2'>
              <input
                type='submit'
                class='profile-edit-btn'
                name='btnAddMore'
                value='Edit Profile'
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default User;
