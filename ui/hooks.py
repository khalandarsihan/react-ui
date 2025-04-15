app_name = "ui"
app_title = "UI"
app_publisher = "Sihan"
app_description = "UI"
app_email = "sihan@react.com"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/ui/css/ui.css"
# app_include_js = "/assets/ui/js/ui.js"

# include js, css files in header of web template
# web_include_css = "/assets/ui/css/ui.css"
# web_include_js = "/assets/ui/js/ui.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "ui/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
page_js = {
    "react-app": "public/react/bundle.js",
    "dashboard": "public/react/bundle.js",
    "companies": "public/react/bundle.js",
    "individuals": "public/react/bundle.js",
    "invoices": "public/react/bundle.js",
    "estimates": "public/react/bundle.js",
    "works": "public/react/bundle.js",
    "alerts": "public/react/bundle.js",
    "staff": "public/react/bundle.js",
    "vehicles": "public/react/bundle.js",
    "payments": "public/react/bundle.js",
    "partners-contacts": "public/react/bundle.js",
    "legal-documents": "public/react/bundle.js",
    "bank-accounts": "public/react/bundle.js"
}

# Home page
home_page = "dashboard"

# Website route rules for React app
website_route_rules = [
    {"from_route": "/react-app", "to_route": "react-app"},
    {"from_route": "/react-app/*", "to_route": "react-app"},
    
    {"from_route": "/dashboard", "to_route": "dashboard"},
    {"from_route": "/dashboard/*", "to_route": "dashboard"},
    
    {"from_route": "/companies", "to_route": "companies"},
    {"from_route": "/companies/*", "to_route": "companies"},
    
    {"from_route": "/individuals", "to_route": "individuals"},
    {"from_route": "/individuals/*", "to_route": "individuals"},
    
    {"from_route": "/invoices", "to_route": "invoices"},
    {"from_route": "/invoices/*", "to_route": "invoices"},
    
    {"from_route": "/estimates", "to_route": "estimates"},
    {"from_route": "/estimates/*", "to_route": "estimates"},
    
    {"from_route": "/works", "to_route": "works"},
    {"from_route": "/works/*", "to_route": "works"},
    
    {"from_route": "/alerts", "to_route": "alerts"},
    {"from_route": "/alerts/*", "to_route": "alerts"},
    
    {"from_route": "/staff", "to_route": "staff"},
    {"from_route": "/staff/*", "to_route": "staff"},
    
    {"from_route": "/vehicles", "to_route": "vehicles"},
    {"from_route": "/vehicles/*", "to_route": "vehicles"},
    
    {"from_route": "/payments", "to_route": "payments"},
    {"from_route": "/payments/*", "to_route": "payments"},
    
    {"from_route": "/partners-contacts", "to_route": "partners-contacts"},
    {"from_route": "/partners-contacts/*", "to_route": "partners-contacts"},
    
    {"from_route": "/legal-documents", "to_route": "legal-documents"},
    {"from_route": "/legal-documents/*", "to_route": "legal-documents"},
    
    {"from_route": "/bank-accounts", "to_route": "bank-accounts"},
    {"from_route": "/bank-accounts/*", "to_route": "bank-accounts"}
]
