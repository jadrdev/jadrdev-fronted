export interface SettingGhost {
    title:                           string;
    description:                     string;
    logo:                            string;
    icon:                            string;
    accent_color:                    string;
    cover_image:                     string;
    facebook:                        string;
    twitter:                         string;
    lang:                            string;
    locale:                          string;
    timezone:                        string;
    codeinjection_head:              null;
    codeinjection_foot:              null;
    navigation:                      Navigation[];
    secondary_navigation:            Navigation[];
    meta_title:                      null;
    meta_description:                null;
    og_image:                        null;
    og_title:                        null;
    og_description:                  null;
    twitter_image:                   null;
    twitter_title:                   null;
    twitter_description:             null;
    members_support_address:         string;
    members_enabled:                 boolean;
    allow_self_signup:               boolean;
    members_invite_only:             boolean;
    paid_members_enabled:            boolean;
    firstpromoter_account:           null;
    portal_button_style:             string;
    portal_button_signup_text:       string;
    portal_button_icon:              null;
    portal_signup_terms_html:        null;
    portal_signup_checkbox_required: boolean;
    portal_plans:                    string[];
    portal_name:                     boolean;
    portal_button:                   boolean;
    comments_enabled:                string;
    recommendations_enabled:         boolean;
    outbound_link_tagging:           boolean;
    url:                             string;
    version:                         string;
}

export interface Navigation {
    label: string;
    url:   string;
}
