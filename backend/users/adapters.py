from allauth.account.adapter import DefaultAccountAdapter
from allauth.socialaccount.adapter import DefaultSocialAccountAdapter
from django.http import JsonResponse


class NoRedirectAccountAdapter(DefaultAccountAdapter):
    def respond_user_inactive(self, request, user):
        return JsonResponse({'error': 'User inactive'}, status=400)

    def get_login_redirect_url(self, request):
        return "/"

    def respond_email_verification_sent(self, request, user):
        return JsonResponse({'detail': 'Email verification sent'}, status=200)


class NoRedirectSocialAdapter(DefaultSocialAccountAdapter):
    def get_connect_redirect_url(self, request, socialaccount):
        return "/"
