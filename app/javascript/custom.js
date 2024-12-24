import { Application } from "@hotwired/stimulus";
import ScrollTo from "stimulus-scroll-to"

const application = Application.start()
application.register("scroll-to", ScrollTo)




document.addEventListener('DOMContentLoaded', function () {

  const resourceButton = document.querySelector('.btn-resource');

  if (resourceButton) {
    resourceButton.addEventListener('click', function () {

      document.getElementById('resource-personal-plan').innerHTML = `
          <div class="pix-content text-center pix_feature_std gray-dark-bg pix_orange_border">
            <h3 class="pix-white secondary-font"><strong>Personal</strong></h3>
            <p class="pix-black-gray-light pix-margin-bottom-10 secondary-font">
              <strong>FOR RESOURCE</strong>
            </p>
            <h4><span class="label label-default pix-light-gray gray-6-bg">$19.99/mo</span></h4>
            <p class="pix-black-gray-light pix-margin-bottom-10 big-line-height big-text">
              3 Landing Pages<br>10,000 Page views<br>Resource Support<br>-<br>-
            </p>
            <a href="#" class="btn btn-md btn-round-lg orange-bg pix-white pix-margin-bottom-10 pix-margin-right-10 wide pix-margin-top-10 secondary-font">
              <strong>GET STARTED</strong>
            </a>
          </div>
        `;

      // Change content for Startup Plan
      document.getElementById('resource-startup-plan').innerHTML = `
          <div class="pix-content text-center pix_feature_std gray-dark-bg pix_orange_border">
            <h3 class="pix-white secondary-font"><strong>Startup</strong></h3>
            <p class="pix-orange pix-margin-bottom-10 secondary-font">
              <strong>FOR RESOURCE</strong>
            </p>
            <h4><span class="label label-default pix-light-gray gray-6-bg">$49.99/mo</span></h4>
            <p class="pix-black-gray-light pix-margin-bottom-10 big-line-height big-text">
              10 Landing Pages<br>20,000 Page views<br>Resource Support<br>Priority Support<br>-
            </p>
            <a href="#" class="btn btn-md btn-round-lg orange-bg pix-white pix-margin-bottom-10 pix-margin-right-10 wide pix-margin-top-10 secondary-font">
              <strong>GET STARTED</strong>
            </a>
          </div>
        `;

      // Change content for Business Plan
      document.getElementById('resource-business-plan').innerHTML = `
          <div class="pix-content text-center pix_feature_std gray-dark-bg pix_orange_border">
            <h3 class="pix-white secondary-font"><strong>Business</strong></h3>
            <p class="pix-black-gray-light pix-margin-bottom-10 secondary-font">
              <strong>FOR RESOURCE</strong>
            </p>
            <h4><span class="label label-default pix-light-gray gray-6-bg">$99.99/mo</span></h4>
            <p class="pix-black-gray-light pix-margin-bottom-10 big-line-height big-text">
              50 Landing Pages<br>100,000 Page views<br>Resource Support<br>Premium Support<br>Free Updates
            </p>
            <a href="#" class="btn btn-md btn-round-lg orange-bg pix-white pix-margin-bottom-10 pix-margin-right-10 wide pix-margin-top-10 secondary-font">
              <strong>GET STARTED</strong>
            </a>
          </div>
        `;
    });
  }


  const mvpButton = document.querySelector('.btn-mvp');

  if (mvpButton) {
    mvpButton.addEventListener('click', function () {

      document.getElementById('resource-personal-plan').innerHTML = `
          <div class="pix-content text-center pix_feature_std gray-dark-bg pix_orange_border">
            <h3 class="pix-white secondary-font"><strong>Personal</strong></h3>
            <p class="pix-black-gray-light pix-margin-bottom-10 secondary-font">
              <strong>FOR MVP</strong>
            </p>
            <h4><span class="label label-default pix-light-gray gray-6-bg">$19.99/mo</span></h4>
            <p class="pix-black-gray-light pix-margin-bottom-10 big-line-height big-text">
              3 Landing Pages<br>10,000 Page views<br>Resource Support<br>-<br>-
            </p>
            <a href="#" class="btn btn-md btn-round-lg orange-bg pix-white pix-margin-bottom-10 pix-margin-right-10 wide pix-margin-top-10 secondary-font">
              <strong>GET STARTED</strong>
            </a>
          </div>
        `;

      // Change content for Startup Plan
      document.getElementById('resource-startup-plan').innerHTML = `
          <div class="pix-content text-center pix_feature_std gray-dark-bg pix_orange_border">
            <h3 class="pix-white secondary-font"><strong>Startup</strong></h3>
            <p class="pix-orange pix-margin-bottom-10 secondary-font">
              <strong>FOR MVP</strong>
            </p>
            <h4><span class="label label-default pix-light-gray gray-6-bg">$49.99/mo</span></h4>
            <p class="pix-black-gray-light pix-margin-bottom-10 big-line-height big-text">
              10 Landing Pages<br>20,000 Page views<br>Resource Support<br>Priority Support<br>-
            </p>
            <a href="#" class="btn btn-md btn-round-lg orange-bg pix-white pix-margin-bottom-10 pix-margin-right-10 wide pix-margin-top-10 secondary-font">
              <strong>GET STARTED</strong>
            </a>
          </div>
        `;

      // Change content for Business Plan
      document.getElementById('resource-business-plan').innerHTML = `
          <div class="pix-content text-center pix_feature_std gray-dark-bg pix_orange_border">
            <h3 class="pix-white secondary-font"><strong>Business</strong></h3>
            <p class="pix-black-gray-light pix-margin-bottom-10 secondary-font">
              <strong>FOR MVP</strong>
            </p>
            <h4><span class="label label-default pix-light-gray gray-6-bg">$99.99/mo</span></h4>
            <p class="pix-black-gray-light pix-margin-bottom-10 big-line-height big-text">
              50 Landing Pages<br>100,000 Page views<br>Resource Support<br>Premium Support<br>Free Updates
            </p>
            <a href="#" class="btn btn-md btn-round-lg orange-bg pix-white pix-margin-bottom-10 pix-margin-right-10 wide pix-margin-top-10 secondary-font">
              <strong>GET STARTED</strong>
            </a>
          </div>
        `;
    });
  }




});
