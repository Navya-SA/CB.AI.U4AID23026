# Notification System Design

## Stage 1 — Functional Requirements

The notification system should support:

- Sending notifications to users
- Marking notifications as read/unread
- Real-time notification delivery
- Priority-based notifications
- Scalable API architecture

### APIs

#### GET /notifications
Fetch all notifications for a user.

#### POST /notifications
Create a new notification.

#### PUT /notifications/:id/read
Mark notification as read.

---

## Stage 2 — Database Design

### Database Choice
MongoDB is used because:
- Flexible schema
- High scalability
- Fast document retrieval

### Notification Schema

```json
{
  "id": "string",
  "userId": "string",
  "message": "string",
  "priority": "high | medium | low",
  "read": false,
  "timestamp": "date"
}```

## Stage 3 — Performance Optimization

To optimize slow database queries:

- Add indexes on:
  - userId
  - timestamp
  - priority

- Use pagination for large notification lists.

Example:

GET /notifications?page=1&limit=20

- Reduce unnecessary database scans using indexed fields.

---

## Stage 4 — Reducing Database Load

To reduce high database load:

- Use Redis caching for frequently accessed notifications
- Implement pagination
- Use lazy loading for older notifications
- Store temporary notification states in cache
- Use asynchronous processing where possible

These techniques improve scalability and reduce response time.

---

## Stage 5 — Scalable Notification Architecture

### Components

- API Gateway
- Notification Service
- MongoDB Database
- Redis Cache
- Message Queue (RabbitMQ/Kafka)
- WebSocket Server

### Workflow

1. User triggers an event
2. Event enters message queue
3. Notification service processes event
4. Notification stored in database
5. Notification delivered in real time using WebSockets

### Benefits

- High scalability
- Fault tolerance
- Faster delivery
- Reduced server overload

---

## Stage 6 — Priority-Based Notification Retrieval

Notifications should be sorted based on:

1. Priority
2. Timestamp

High-priority notifications are delivered first.

Efficient retrieval can be implemented using:
- Indexed database queries
- Priority queues
- Cached recent notifications

This ensures low latency and better user experience.
