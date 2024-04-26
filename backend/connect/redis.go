package connect

import (
	"context"
	"fmt"
	"os"

	"github.com/redis/go-redis/v9"
)

var (
	RedisClient *redis.Client
	ctx         context.Context
)

func ConnectRedis() {
	ctx = context.TODO()

	RedisClient = redis.NewClient(&redis.Options{
		Addr: os.Getenv("REDIS_URL"),
	})

	if _, err := RedisClient.Ping(ctx).Result(); err != nil {
		panic(err)
	}

	err := RedisClient.Set(ctx, "test", "How to Refresh Access Tokens the Right Way in Golang", 0).Err()
	if err != nil {
		panic(err)
	}

	fmt.Println("✅ Redis client connected successfully...")
}
