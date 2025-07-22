---
title: "Helpful matplotlib snippets 📈"
date:
  created: 2025-07-22
  updated: 2025-07-22
categories:
  - vision
  - research
  - open-source
slug: matplotlib-snippets
draft: true
---

`matplotlib` -- the de-facto library of plotting in Python.

`seaborn` -- the golden tool for statistical data visualization. Also comes with **nice style defaults**.

I have found myself using both libraries frequently with some style preferences that I usually adopt when creating plots. For the sake of reproducibility and convenience, I have collected some of these snippets here.

<!-- more -->

## Global style definitions

```python
import matplotlib.pyplot as plt
import seaborn as sns

sns.set_theme(context='paper', style='ticks', font_scale=2)
plt.rcParams['font.family'] = 'Noto Sans'
plt.rcParams['axes.grid'] = True
plt.rcParams['axes.linewidth'] = 1.5
```

## Nicer emphasis of bar plots

```python
data = {}  # Some data here
fig, ax = plt.subplots(figsize=(12, 9))
sns.barplot(data=data, x='x', y='y', hue='hue', palette='muted', ax=ax)
```

Add black edges to bars:

```python
for _, bar in enumerate(ax.patches):
    bar.set_edgecolor('black')
    bar.set_linewidth(1)
```

or, set edge color to solid colors:

```python
for _, bar in enumerate(ax.patches):
    clr = bar.get_facecolor()
    bar.set_edgecolor(clr)
    bar.set_linewidth(1.5)
```

Hatches:

```python
hatches = ['/', '-', '.']  # customize this list as preferred
for i, bar in enumerate(ax.patches):
    bar.set_hatch(hatches[i % len(hatches)])
```

## Line plots with markers

```python
data = {}  # Some more data here
fig, ax = plt.subplots(figsize=(12, 9))
sns.lineplot(
    data=data,
    x='x',
    y='y',
    marker='o',
    markersize=8,
    linewidth=1.5,
    ax=ax,
)
```

## Saving figures

```python
plt.savefig('figure.png', dpi=300, bbox_inches='tight')
```
