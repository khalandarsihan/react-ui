import frappe

def get_context(context):
    context.no_cache = 1
    context.no_breadcrumbs = True
    context.title = "FixDocs - Invoices"
