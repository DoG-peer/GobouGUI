package main

import (
	"fmt"
	"time"
)

func main() {
	for i := 0; i < 5; i++ {
		fmt.Println(time.Now().String() + "\nhoge")
		time.Sleep(1 * time.Second)
	}
}
