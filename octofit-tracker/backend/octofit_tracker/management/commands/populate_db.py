
from django.core.management.base import BaseCommand
from octofit_tracker.models.models import Team, User, Activity, Workout, Leaderboard
from datetime import date
from pymongo import MongoClient

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **kwargs):
        # Use pymongo to clear collections directly
        client = MongoClient('localhost', 27017)
        db = client['octofit_db']
        db.activity.drop()
        db.leaderboard.drop()
        db.user.drop()
        db.workout.drop()
        db.team.drop()

        # Create Teams
        marvel = Team.objects.create(name='Marvel', description='Team Marvel Superheroes')
        dc = Team.objects.create(name='DC', description='Team DC Superheroes')

        # Create Users
        users = [
            User(name='Spider-Man', email='spiderman@marvel.com', team=marvel, is_superhero=True),
            User(name='Iron Man', email='ironman@marvel.com', team=marvel, is_superhero=True),
            User(name='Wonder Woman', email='wonderwoman@dc.com', team=dc, is_superhero=True),
            User(name='Batman', email='batman@dc.com', team=dc, is_superhero=True),
        ]
        for user in users:
            user.save()

        # Create Activities
        Activity.objects.create(user=users[0], type='Running', duration=30, date=date.today())
        Activity.objects.create(user=users[1], type='Cycling', duration=45, date=date.today())
        Activity.objects.create(user=users[2], type='Swimming', duration=60, date=date.today())
        Activity.objects.create(user=users[3], type='Yoga', duration=40, date=date.today())

        # Create Workouts
        Workout.objects.create(name='Super Strength', description='Strength workout for superheroes', suggested_for='All')
        Workout.objects.create(name='Agility Training', description='Agility and speed drills', suggested_for='Marvel')
        Workout.objects.create(name='Endurance Session', description='Endurance training for all', suggested_for='DC')

        # Create Leaderboards
        Leaderboard.objects.create(team=marvel, points=150)
        Leaderboard.objects.create(team=dc, points=120)

        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data.'))
