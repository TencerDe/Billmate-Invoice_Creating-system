from django.urls import path
from . import views

urlpatterns = [
    path('customers/', views.get_customers, name='get_customers'),
    path('customers/<int:customer_id>/', views.get_customer, name='get_customer'),
    path('customers/add/', views.add_customer, name='add_customer'),
    path('customers/delete/<int:customer_id>/', views.delete_customer, name='delete_customer'),

    path('products/', views.get_products, name='get_products'),
    path('products/add/', views.add_product, name='add_product'),
    path('products/delete/<int:product_id>/', views.delete_product, name='delete_product'),

    path('invoices/create/', views.create_invoice, name='create_invoice'),
    path('invoices/', views.get_all_invoices, name='get_all_invoices'),
    path('invoices/<int:invoice_id>/download/', views.download_invoice, name='download_invoice'),
]
