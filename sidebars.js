/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a docs menu with the sidebar
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'index',
    {
      type: 'category',
      label: 'Workforce Management Overview',
      collapsed: false,
      items: [
        'Workforce_Management_Overview__Sprinklr_Help_Center',
        'Standard_Workforce_Manager_Persona_App__Sprinklr_Help_Center',
      ],
    },
    {
      type: 'category',
      label: 'Shifts & Bidding',
      collapsed: false,
      items: [
        'Manage_Shifts_in_Sprinklr_WFM__Sprinklr_Help_Center',
        'Manage_Shift_Bidding__Sprinklr_Help_Center',
      ],
    },
    {
      type: 'category',
      label: 'Activities & Presets',
      collapsed: false,
      items: [
        'Manage_Activities_in_Sprinklr_WFM__Sprinklr_Help_Center',
        'Manage_Presets__Sprinklr_Help_Center',
      ],
    },
  ],
};

module.exports = sidebars;
