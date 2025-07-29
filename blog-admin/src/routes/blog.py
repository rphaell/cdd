from flask import Blueprint, request, jsonify
from src.models.post import Post
from src.models.user import db
from datetime import datetime

blog_bp = Blueprint('blog', __name__)

@blog_bp.route('/posts', methods=['GET'])
def get_posts():
    """Listar todos os posts"""
    try:
        posts = Post.query.order_by(Post.created_at.desc()).all()
        return jsonify([post.to_dict() for post in posts])
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@blog_bp.route('/posts/<int:post_id>', methods=['GET'])
def get_post(post_id):
    """Obter um post específico"""
    try:
        post = Post.query.get_or_404(post_id)
        return jsonify(post.to_dict())
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@blog_bp.route('/posts', methods=['POST'])
def create_post():
    """Criar um novo post"""
    try:
        data = request.get_json()
        
        if not data or not data.get('title') or not data.get('content'):
            return jsonify({'error': 'Título e conteúdo são obrigatórios'}), 400
        
        post = Post(
            title=data['title'],
            content=data['content'],
            image_url=data.get('image_url', '')
        )
        
        db.session.add(post)
        db.session.commit()
        
        return jsonify(post.to_dict()), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@blog_bp.route('/posts/<int:post_id>', methods=['PUT'])
def update_post(post_id):
    """Atualizar um post existente"""
    try:
        post = Post.query.get_or_404(post_id)
        data = request.get_json()
        
        if not data:
            return jsonify({'error': 'Dados não fornecidos'}), 400
        
        if 'title' in data:
            post.title = data['title']
        if 'content' in data:
            post.content = data['content']
        if 'image_url' in data:
            post.image_url = data['image_url']
        
        post.updated_at = datetime.utcnow()
        db.session.commit()
        
        return jsonify(post.to_dict())
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@blog_bp.route('/posts/<int:post_id>', methods=['DELETE'])
def delete_post(post_id):
    """Deletar um post"""
    try:
        post = Post.query.get_or_404(post_id)
        db.session.delete(post)
        db.session.commit()
        
        return jsonify({'message': 'Post deletado com sucesso'})
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

