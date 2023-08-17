import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { isPrismaError } from 'src/common/utils';

@Injectable()
export class FollowService {
    constructor(private readonly prisma: PrismaService) {}

    public async followUser(followingId: string, followerId: string) {
        try {
            const follow = await this.prisma.follow.create({
                data: {
                    follower: { connect: { id: followerId } },
                    following: { connect: { id: followingId } },
                },
            });
            return follow;
        } catch (error) {
            console.log('error in creating follow', error);
            isPrismaError(error);
            throw error;
        }
    }

    public async unFollowUser(followingId: string, followerId: string) {
        try {
            const follow = await this.prisma.follow.delete({
                where: {
                    followerId_followingId: {
                        followingId,
                        followerId,
                    },
                },
                select: {
                    id: true,
                },
            });
            if (follow) {
                return follow;
            } else {
                throw new Error('Follow record not found.');
            }
        } catch (error) {
            console.log('error in deleting follow', error);
            isPrismaError(error);
            throw error;
        }
    }

    public async checkFollow(
        followingId: string,
        followerId: string,
    ): Promise<boolean> {
        try {
            const follow = await this.prisma.follow.findFirst({
                where: {
                    follower: { id: followerId },
                    following: { id: followingId },
                },
            });
            return !!follow;
        } catch (error) {
            console.log('error in checking follow', error);
            isPrismaError(error);
            throw error;
        }
    }

    public async getMyFollowers(userId: string) {
        try {
            const followers = await this.prisma.follow.findMany({
                where: {
                    followingId: userId,
                },
                include: {
                    following: {
                        select: {
                            id: true,
                            username: true,
                            photo: true,
                        },
                    },
                },
            });
            const validFollowers = followers.map((follower) => ({
                userId: follower.following.id,
                username: follower.following.username,
                photo: follower.following.photo || '', // Provide a default value if photo is null
            }));
            return validFollowers;
        } catch (error) {
            console.log('error in getting followers', error);
            isPrismaError(error);
            throw error;
        }
    }

    public async getMyFollowings(userId: string) {
        try {
            const followings = await this.prisma.follow.findMany({
                where: {
                    followerId: userId,
                },
                include: {
                    follower: {
                        select: {
                            id: true,
                            username: true,
                            photo: true,
                        },
                    },
                },
            });
            const validFollowings = followings.map((follower) => ({
                userId: follower.follower.id,
                username: follower.follower.username,
                photo: follower.follower.photo || '',
            }));
            return validFollowings;

            
        } catch (error) {
            console.log('error in getting followers', error);
            isPrismaError(error);
            throw error;
        }
    }

    public async getUserFollowers(userId: string) {
        try {
            const followers = await this.prisma.follow.findMany({
                where: {
                    followingId: userId,
                },
                include: {
                    follower: {
                        select: {
                            id: true,
                            username: true,
                            photo: true,
                        },
                    },
                },
            });

            const validFollowers = followers.map((follower) => ({
                userId: follower.follower.id,
                username: follower.follower.username,
                photo: follower.follower.photo || '',
            }));
            return validFollowers;
        } catch (error) {
            console.log('error in getting followers', error);
            isPrismaError(error);
            throw error;
        }
    }

    public async getUserFollowings(userId: string) {
        try {
            const followers = await this.prisma.follow.findMany({
                where: {
                    followerId: userId,
                },
                include: {
                    following: {
                        select: {
                            id: true,
                            username: true,
                            photo: true,
                        },
                    },
                },
            });
            const validFollowings = followers.map((follower) => ({
                userId: follower.following.id,
                username: follower.following.username,
                photo: follower.following.photo || '', // Provide a default value if photo is null
            }));
            return validFollowings;
        } catch (error) {
            console.log('error in getting followers', error);
            isPrismaError(error);
            throw error;
        }
    }
}
