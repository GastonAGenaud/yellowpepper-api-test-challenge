class SideBar {
    getLogoSpanNavbar() {
      return cy.get('#logo-span-navbar');
    }

    getSiteTitleNavbar() {
      return cy.get('#sitetitle-navbar');
    }

    getGetStartedLink() {
      return cy.get('a[href="/Admin/application/getstarted"]');
    }

    getDashboardLink() {
      return cy.get('a[href="/Admin/application/GetKPI"]');
    }

    getLaunchSiteLink() {
      return cy.get('a[href="/SiteCreator/"]');
    }

    getCategoriesAndFiltersDropdown() {
      return cy.get('#li-settings[name="dropright"]');
    }

    getCreateCategoriesLink() {
      return cy.get('a[href="/Category"]');
    }

    getCreateCustomFieldsLink() {
      return cy.get('a[href="/Admin/Customfield"]');
    }

    getUsersLink() {
      return cy.get('a[href="/Admin/User"]');
    }

    getAutomatedEmailsLink() {
      return cy.get('a[href="/Admin/Application/GetSMTPData"]');
    }

    getDesignDropdown() {
      return cy.get('a[data-toggle="dropdown"][name="dropright"]:contains("Design")');
    }

    // Añade aquí los enlaces del menú desplegable "Design"

    getSettingsDropdown() {
      return cy.get('#li-settings[data-toggle="dropdown"][name="dropright"]');
    }

    // Añade aquí los enlaces del menú desplegable "Settings"

    getReportsDropdown() {
      return cy.get('a[data-toggle="dropdown"][name="dropright"]:contains("Reports")');
    }

    // Añade aquí los enlaces del menú desplegable "Reports"

    getAddOnsLink() {
      return cy.get('a[href="/admin/feature/addons"]');
    }

    getReportedLink() {
      return cy.get('a[href="/Report"]');
    }

    getSuperAdminDropdown() {
      return cy.get('#li-superadmin[data-toggle="dropdown"][name="dropright"]');
    }

    // Añade aquí los enlaces del menú desplegable "Super Admin"

    getSelectPlanLink() {
      return cy.get('#item-select-plan a[href="/Admin/Application/SelectPlan"]');
    }

    getExtendTrialItem() {
      return cy.get('.item-extend-trial');
    }

    // Enlaces del menú desplegable "Design"
getCustomizeHomepageLink() {
    return this.getDesignDropdown().find('a[href="/Admin/application/LandingCustomize"]');
  }

  getCustomizeMenuLink() {
    return this.getDesignDropdown().find('a[href="/Menu/Customize"]');
  }

  // Añade aquí los demás enlaces del menú desplegable "Design"

  // Enlaces del menú desplegable "Settings"
  getSiteWordingLink() {
    return this.getSettingsDropdown().find('a[href="/admin/application/GlobalSettings"]');
  }

  getCompanyInfoLink() {
    return this.getSettingsDropdown().find('a[href="/admin/application/companyinfo"]');
  }

  // Añade aquí los demás enlaces del menú desplegable "Settings"

  // Enlaces del menú desplegable "Reports"
  getContactMessagesLink() {
    return this.getReportsDropdown().find('a[href="/Admin/ContactUs/ContactMessages"]');
  }

  getUserReviewsLink() {
    return this.getReportsDropdown().find('a[href="/Admin/Application/UserReviews"]');
  }

  // Añade aquí los demás enlaces del menú desplegable "Reports"

  // Enlaces del menú desplegable "Super Admin"
  getSiteCreatorLink() {
    return this.getSuperAdminDropdown().find('a[href="/SiteCreator/"]');
  }

  getApplicationServiceSetupLink() {
    return this.getSuperAdminDropdown().find('a[href="/Admin/feature/"]');
  }

  // Añade aquí los demás enlaces del menú desplegable "Super Admin"


  }

  export default SideBar;
