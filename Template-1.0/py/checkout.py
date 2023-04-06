# SDK de Mercado Pago
import mercadopago
# Agrega credenciales 'PROD_ACCESS_TOKEN'
sdk = mercadopago.SDK("TEST-4529951404924036-020909-dd18528d2c6223e191953a1c2a01bffb-628494902")


# Crea un ítem en la preferencia
preference_data = {
    "items": [
        {
            "title": "Mi producto",
            "quantity": 1,
            "unit_price": 75.76,
        }
    ]
}

preference_response = sdk.preference().create(preference_data)
preference = preference_response["response"]

print(preference)