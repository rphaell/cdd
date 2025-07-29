from flask import Blueprint, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

contact_bp = Blueprint('contact', __name__)

@contact_bp.route('/contact', methods=['POST'])
def send_contact_email():
    """Enviar e-mail de contato"""
    try:
        data = request.get_json()
        
        # Validar dados obrigatórios
        required_fields = ['firstName', 'lastName', 'email', 'subject', 'message']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'error': f'Campo {field} é obrigatório'}), 400
        
        # Validar e-mail
        email = data['email']
        if '@' not in email or '.' not in email:
            return jsonify({'error': 'E-mail inválido'}), 400
        
        # Preparar conteúdo do e-mail
        sender_name = f"{data['firstName']} {data['lastName']}"
        subject = f"[Controle do Direito] {data['subject']}"
        
        # Corpo do e-mail em HTML
        html_body = f"""
        <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2 style="color: #6B46C1; border-bottom: 2px solid #6B46C1; padding-bottom: 10px;">
                    Nova Mensagem do Site - Controle do Direito
                </h2>
                
                <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="margin-top: 0; color: #333;">Dados do Contato:</h3>
                    <p><strong>Nome:</strong> {sender_name}</p>
                    <p><strong>E-mail:</strong> {email}</p>
                    <p><strong>Telefone:</strong> {data.get('phone', 'Não informado')}</p>
                    <p><strong>Assunto:</strong> {data['subject']}</p>
                </div>
                
                <div style="background-color: #fff; padding: 20px; border-left: 4px solid #6B46C1; margin: 20px 0;">
                    <h3 style="margin-top: 0; color: #333;">Mensagem:</h3>
                    <p style="white-space: pre-wrap;">{data['message']}</p>
                </div>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
                    <p>Esta mensagem foi enviada através do formulário de contato do site Controle do Direito.</p>
                    <p>Data/Hora: {data.get('timestamp', 'Não disponível')}</p>
                </div>
            </div>
        </body>
        </html>
        """
        
        # Para demonstração, vamos simular o envio do e-mail
        # Em produção, você configuraria um servidor SMTP real
        
        # Simular sucesso
        return jsonify({
            'success': True,
            'message': 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
            'data': {
                'sender': sender_name,
                'email': email,
                'subject': data['subject']
            }
        }), 200
        
    except Exception as e:
        return jsonify({'error': f'Erro interno do servidor: {str(e)}'}), 500

@contact_bp.route('/contact/test', methods=['GET'])
def test_contact():
    """Endpoint de teste para verificar se o serviço está funcionando"""
    return jsonify({
        'status': 'ok',
        'message': 'Serviço de contato funcionando',
        'email_destination': 'phael92br@gmail.com'
    })

